from google.appengine.ext import ndb

class Person(ndb.Model):
    firstName = ndb.StringProperty(required=True)
    lastName = ndb.StringProperty(required=True)
    age = ndb.IntegerProperty(required=True)

    def getName(self):
        return self.firstName + ' ' + self.lastName

    def getAge(self):
        return self.age