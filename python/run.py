import json

f = open('astronaut_product.json')
d = json.load(f)

product = d['products'][0]
variants = d['products'][0]['variants']

obj = {'potential_sales_total': 0, 'products': []}

title = product['title']
desc = product['body_html']
in_stock = []
out_of_stock = []

for v in variants:
    v_title = v['title']
    potent_sales = float(v['price'])*float(v['inventory_quantity'])
    obj['potential_sales_total']+=potent_sales
    inv = v['inventory_quantity']
    new_v = {
        'id': v['id'],
        'title': f'{title} - {v_title}',
        'price': v['price'],
        'inventory count': v['inventory_quantity'],
        'desc': desc,
        'color': v['option1'],
        'potential_sales': float(v['price'])*float(v['inventory_quantity']),
    }

    if inv > 0: 
        in_stock.append(new_v)
    else:
        out_of_stock.append(new_v)
    obj['products'].append(new_v)


for s in in_stock:
    print(s['title'], ': ', s['inventory count'])

# Yes, Purple works.