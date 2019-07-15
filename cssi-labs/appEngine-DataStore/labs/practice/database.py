from models import *

def seedData():
    person1 = Person(firstName="Manny", lastName="Lopez", age=15)
    person1.put()
    print('Name: ' + person1.getName())
    print('Age: ' + str(person1.getAge()))

    person2 = Person(firstName="Raul", lastName="Mendez", age=22)
    person2.put()
    print('Name: ' + person2.getName())
    print('Age: ' + str(person2.getAge()))

    person3 = Person(firstName="Nick", lastName="Slone", age=10)
    person3.put()
    print('Name: ' + person3.getName())
    print('Age: ' + str(person3.getAge()))

    person4 = Person(firstName="Adam", lastName="Smith", age=5)
    person4.put()
    print('Name: ' + person4.getName())
    print('Age: ' + str(person4.getAge()))

    person5 = Person(firstName="Alex", lastName="Rodriguez", age=25)
    person5.put()
    print('Name: ' + person5.getName())
    print('Age: ' + str(person5.getAge()))

    person6 = Person(firstName="Fernando", lastName="Mondragon", age=30)
    person6.put()
    print('Name: ' + person6.getName())
    print('Age: ' + str(person6.getAge()))