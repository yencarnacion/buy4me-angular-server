package b4m

import grails.rest.*
@Resource(uri='/recipes', formats=['json', 'xml'])
class Recipe {

    static constraints = {
        id()
        title()
        description()
        ingredients()
    }

    static hasMany = [ingredients: Ingredient]
    String title;
    String description
    List<Ingredient> ingredients = new ArrayList<Ingredient>()

    //static hasMany = [ingredients: Ingredient]

}
