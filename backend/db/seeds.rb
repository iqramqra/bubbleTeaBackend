# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "asdf", password: "asdf")

drink1 = Drink.create(name: "Taro Milk Tea", image: "https://i.imgur.com/rSrjATY.png", price: 4.25, category: "Milk Tea")
drink2 = Drink.create(name: "Coffee Milk Tea", image: "https://i.imgur.com/nLPhAiM.png", price: 4.25, category: "Milk Tea")
drink3 = Drink.create(name: "Red Bean Slush", image: "https://i.imgur.com/JAMNB6H.png", price: 4.75, category: "Slush")
drink4 = Drink.create(name: "Mango Slush", image: "https://i.imgur.com/xgdoKhs.png", price: 4.75, category: "Slush")
drink5 = Drink.create(name: "Passion Fruit Green Tea", image: "https://i.imgur.com/7hHqwgI.png", price: 4.50, category: "Tea")

puts "All Done!"