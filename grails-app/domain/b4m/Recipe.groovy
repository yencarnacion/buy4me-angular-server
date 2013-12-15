package b4m

import grails.rest.Resource

@Resource(uri='/recipes', formats = ['json', 'xml'])
class Recipe {

    static constraints = {
        id()
        title()
        description()
        ingredients()
    }

    String title;
    String description
    //List ingredients

    static hasMany = [ingredients: Ingredient]

}
