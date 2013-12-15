package b4m

class Ingredient {

    static constraints = {
        amount()
        amountUnits()
        ingredientName()
    }

    static belongsTo = [recipe: Recipe]
    Integer amount
    String amountUnits
    String ingredientName
}
