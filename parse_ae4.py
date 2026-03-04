import re

def parse_articles(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by article separators
    parts = re.split(r'-+\s*[aA]rticulos?\s*\d*\s*-+', content, flags=re.IGNORECASE)
    
    articles = []
    for part in parts:
        if not part.strip():
            continue
        
        lines = part.split('\n')
        
        title = ""
        sections = []
        current_section = None
        current_subsection = None
        
        # We need a state machine
        # State: 0=finding title, 1=finding sections
        state = 0
        
        buffer = []
        
        def flush_buffer():
            nonlocal buffer, current_subsection
            text = '\n'.join(buffer).strip()
            if text:
                # heuristic for lists:
                list_items = []
                paras = []
                for b_line in text.split('\n'):
                    b_line = b_line.strip()
                    if not b_line: continue
                    # check if it looks like a list item
                    if b_line.startswith('-') or (len(buffer)>1 and re.match(r'^[A-Z][^.]*:', b_line)):
                        # It might be a list item.
                        # Wait, the txt has indentation for lists.
                        pass
                
                # A simpler approach: just paragraphs.
                # If we see multiple consecutive lines, maybe they are one paragraph or a list.
                # Let's just do Paragrahs for now, and handle lists by checking if lines are short or start with special chars, 
                # but since we want to match AE2 format:
                pass
                
        # Better approach: 
        raw_lines = [l for l in lines if l.strip()]
        if not raw_lines: continue
        
        title = raw_lines[0].strip()
        
        content_lines = raw_lines[1:]
        
        # We will represent the parsed structure as a tree
        article = {'title': title, 'content': []}
        
        # let's write a simple parser
        current_item = article['content'] # list of elements
        
        # A stack of contexts
        context = [article['content']]
        
        i = 0
        while i < len(content_lines):
            line = content_lines[i]
            sline = line.strip()
            
            # Check for major section (e.g., "1. Introducción", "Introducción", "1. Concepto")
            # Usually starts with number and dot, or is "Introducción", "Conclusión", "Bibliografía"
            major_match = re.match(r'^(\d+\.|[IVX]+\.)?\s*(Introducción|Conclusión|Bibliografía|Conclusiones|Resumen.*|[\w\s]+)$', sline, flags=re.IGNORECASE)
            
            is_major = False
            is_sub = False
            
            if re.match(r'^\d+\.\s+[A-Z]', sline) or sline.lower() in ['introducción', 'conclusión', 'bibliografía']:
                is_major = True
            elif re.match(r'^\d+\.\d+\.?\s+[A-Z]', sline):
                is_sub = True
                
            if is_major:
                section = {'type': 'section', 'title': sline, 'content': []}
                article['content'].append(section)
                current_item = section['content']
                i+=1
                continue
                
            if is_sub:
                subsection = {'type': 'subsection', 'title': sline, 'content': []}
                current_item.append(subsection)
                i+=1
                continue
                
            # If it's not a header, it's text.
            # Let's check for lists (consecutive indented lines)
            # Find consecutive lines that are indented
            if line.startswith('    ') or line.startswith('\t'):
                # it's a paragraph or list item
                if current_item and isinstance(current_item[-1], dict) and current_item[-1].get('type') == 'list':
                    current_item[-1]['items'].append(sline)
                else:
                    # check if the next line is also indented and similar, to form a List
                    # Actually, let's just create paragraphs, unless we see a clear pattern.
                    current_item.append({'type': 'paragraph', 'text': sline})
            else:
                current_item.append({'type': 'paragraph', 'text': sline})
            
            i+=1
            
        articles.append(article)
        
    return articles

if __name__ == "__main__":
    ars = parse_articles('Articulos_ae4.txt')
    print(f"Found {len(ars)} articles")
