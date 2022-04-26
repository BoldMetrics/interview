import json
from pathlib import Path


class Product:

    def __init__(self) -> None:
        self.variant_id: str
        self.product_title: str
        self.price: float
        self.inventory_count: int
        self.description: str
        self.potential_sales: float

    def details(self):
        return self.__dict__
    
    def is_in_stock(self):
        return True if self.inventory_count > 0 else False


class Store:

    def __init__(self) -> None:
        self.products: list[Product] = []
        self.in_stock_products: list[Product] = []
        self.out_of_stock_products: list[Product] = []
        self.potential_sales_total = 0

    def get_products(self):
        return [x.details() for x in self.products]

    def get_in_stock_products(self):
        return [x.details() for x in self.in_stock_products]

    def get_out_of_stock_products(self):
        return [x.details() for x in self.out_of_stock_products]

    def add_product(self, product: Product):
        self.products.append(product)

        if product.is_in_stock():
            self.in_stock_products.append(product)
        else:
            self.out_of_stock_products.append(product)

        self._calculate_potential_sales_total()

    def get_products_for_team(self, team_count: int = 0, size_counts: dict(xs=int, s=int, m=int, l=int, xl=int) = {}):
        if team_count > 0 and len(size_counts) > 0:
            potential_products = {}

            for product in self.in_stock_products:
                product_color, product_size = product.product_title.split(' / ')
                size_count = size_counts[product_size.lower()]

                if size_count > 0:
                    if potential_products.get(product_color):
                        potential_products[product_color][product_size] = {
                            'desired_quantity': size_count,
                            'available_quantity': product.inventory_count,
                            'is_available_quantity_sufficient': True if product.inventory_count >= size_count else False
                        }
                    else:
                        potential_products[product_color] = {
                            product_size: {
                                'desired_quantity': size_count,
                                'available_quantity': product.inventory_count,
                                'is_available_quantity_sufficient': True if product.inventory_count >= size_count else False
                            }
                        }

            colors_available_for_entire_team = []
            needed_sizes = []

            for size, count in size_counts.items():
                if count > 0:
                    needed_sizes.append(size)

            for color, available_sizes in potential_products.items():
                potentially_available = True

                for size in needed_sizes:
                    potentially_available = True if available_sizes.get(size.upper()) else False

                if potentially_available:
                    is_available_list = []
                    
                    for item in available_sizes.values():
                        is_available_list.append(item['is_available_quantity_sufficient'])

                    if all(is_available_list):
                        colors_available_for_entire_team.append(color)
                        
            return colors_available_for_entire_team

    def _calculate_potential_sales_total(self) -> float:
        total = 0

        if len(self.in_stock_products) > 0:
            for product in self.in_stock_products:
                total += product.potential_sales
        
        self.potential_sales_total = total


if __name__ == '__main__':
    store = Store()

    with open(Path(Path.cwd(), 'data_exercise', 'astronaut_product.json')) as f:
        data = json.load(f)

    for item in data['products']:
        for variant in item['variants']:
            product = Product()
            product.variant_id = variant['id']
            product.product_title = f"{item['title']} {variant['title']}"
            product.price = float(variant['price'])
            product.inventory_count = int(variant['inventory_quantity'])
            product.description = item['body_html']
            product.potential_sales = float(product.price * product.inventory_count)
            store.add_product(product)
    
    team_count = 10
    size_counts = {'xs': 0, 's': 2, 'm': 6, 'l': 2, 'xl': 0}
    products_for_team = store.get_products_for_team(team_count, size_counts=size_counts)

    print('Potential Sales Total:', store.potential_sales_total)
    print('Total Products:', len(store.get_products()))
    print('Total Products In Stock:', len(store.get_in_stock_products()))
    print('Total Products Not In Stock:', len(store.get_out_of_stock_products()))
    print('Team Count:', team_count)
    print('Size Counts:', size_counts)
    print('Available Products for Team:', products_for_team)





# CODE THAT WAS WRITTEN DURING INTERVIEW

# with open('/Users/austinbaxter/Coding/BoldMetrics/interview/data_exercise/astronaut_product.json') as f:
#     data = json.load(f)
#     # print(json.dumps(data, indent=4))

# products = {
#     'products': [],
#     'potential_sales_total': 0,
#     'in_stock_products': [],
#     'out_of_stock_products': [],
# }

# for item in data['products']:
#     potential_sales_total = 0

#     for variant in item['variants']:
#         price = float(variant['price'])
#         inventory_count = float(variant['inventory_quantity'])
#         potential_sales = float(price * inventory_count)

#         if inventory_count >= 10:
#             print(variant['title'])
#             print(inventory_count)
#             print('All can get same color!')
#             print()

#         potential_sales_total += potential_sales

#         flat_object = {
#             'variant_id': variant['id'],
#             'product_title': f"{item['title']} {variant['title']}",
#             'price': price,
#             'inventory_count': inventory_count,
#             'description': item['body_html'],
#             'potential_sales': potential_sales,
#         }

#         products['products'].append(flat_object)
#         products['potential_sales_total'] = potential_sales_total

#         if inventory_count > 0:
#             products['in_stock_products'].append(flat_object)
#         else:
#             products['out_of_stock_products'].append(flat_object)

#         # print(json.dumps(products, indent=4))
