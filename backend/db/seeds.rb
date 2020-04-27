# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "asdf", password: "asdf")

drink1 = Drink.create(name: "Taro Milk Tea", image: "https://i.imgur.com/JsUXIzO.png", price: 4.25, category: "Milk Tea")
drink2 = Drink.create(name: "Coffee Milk Tea", image: "https://i.imgur.com/gczMsDz.png", price: 4.25, category: "Milk Tea")
drink3 = Drink.create(name: "Red Bean Slush", image: "https://i.imgur.com/aejDGD9.png", price: 4.75, category: "Slush")
drink4 = Drink.create(name: "Mango Slush", image: "https://i.imgur.com/i1cSU5d.png", price: 4.75, category: "Slush")
drink5 = Drink.create(name: "Passion Fruit Green Tea", image: "https://i.imgur.com/OyzWyUY.png", price: 4.50, category: "Tea")

puts "All Done!"