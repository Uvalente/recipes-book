export default function validate(values) {
  let errors = {}

  if (!values.recipeName) {
    errors.recipeName = 'Please insert a recipe title.'
  } else if (values.recipeName.length <= 3) {
    errors.recipeName = 'Recipe title must be longer than 3 characters.'
  }

  if (!values.recipeDescription) {
    errors.recipeDescription = "Please insert recipe's instructions."
  }

  if (!values.recipeCourse) {
    errors.recipeCourse = 'Please select a course type.'
  }

  return errors
}