import React, { useContext } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import "./_newrecipe.scss";
import SelectTime from "./SelectTime";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
/* import * as Yup from "yup"; */

const someIngr = [
  { name: "", amount: 0, unit: "-" },
  { name: "", amount: 0, unit: "-" },
  { name: "", amount: 0, unit: "-" },
];
const options = [
  { value: "Greek", label: "Greek" },
  { value: "Indian", label: "Indian" },
];

const IngrList = ({ headline, submittext }) => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  /*   let recipes = JSON.parse(localStorage.getItem("recipes")); */
  /*  const [initialRecipes, setRecipes] = useState(appState); */

  /*   const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
  }); */

  return (
    <div>
      <h2>{headline}</h2>
      <Formik
        initialValues={{
          name: "",
          id: "",
          ingredient: someIngr,
          category: "",
          tags: "",
        }}
        onSubmit={(values) => {
          values.id = values.name.toLowerCase().trim();
          if (!appState.recipes) {
            localStorage.setItem("recipes", JSON.stringify([values], null));
          } else if (
            appState.recipes.find((recipe) => recipe.name === values.name)
          ) {
            console.log("error");
          } else {
            localStorage.setItem("recipes", JSON.stringify([values]));
          }
          appDispatch({
            type: "storeRecipes",
            value: { ...appState.recipes, values },
          });
        }}
        /*  validationSchema={{ validationSchema }} */
        children={({ values, handleChange, handleSubmit }) => (
          <Form className="new_recipe_form" onSubmit={handleSubmit}>
            <label htmlFor="name">Recipe name:</label>
            <Field name="name" className="name" />
            <label htmlFor="category">Category</label>
            <Field as="select" name="category" className="category">
              <option value="defaultValue">Select Category</option>
              <option value="entree">Entrée</option>
              <option value="mainDish">Main dish</option>
              <option value="desert">Desert</option>
            </Field>
            <FieldArray
              name="ingredient"
              children={(arrayHelpers) => (
                <div>
                  {values.ingredient &&
                    values.ingredient.length > 0 &&
                    values.ingredient.map((ingredient, index) => (
                      <div key={index} className="ingredient">
                        <div>
                          <label htmlFor={`ingredient.${index}.name`}>
                            Ingredient
                          </label>
                          <Field
                            name={`ingredient.${index}.name`}
                            className="ingredient"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor={`ingredient.${index}.amount`}>
                            Amount
                          </label>
                          <Field
                            name={`ingredient.${index}.amount`}
                            className="amount"
                          />
                        </div>
                        <div>
                          <label htmlFor={`ingredient.${index}.unit`}>
                            Unit
                          </label>
                          <Field
                            name={`ingr.${index}.unit`}
                            className="unit"
                            as="select"
                          >
                            <option> </option>
                            <option>g</option>
                            <option>kg</option>
                            <option>mL</option>
                            <option>L</option>
                          </Field>
                        </div>
                      </div>
                    ))}
                  {console.log(arrayHelpers)}
                  <button
                    className="add_ingr"
                    type="button"
                    onClick={() => arrayHelpers.push("")}
                  >
                    Add Ingredient
                  </button>
                  <button
                    className="remove_ingr"
                    type="button"
                    onClick={() => arrayHelpers.remove("")}
                  >
                    Remove Ingredient
                  </button>
                  <SelectTime
                    id="preptime"
                    name="preptime"
                    time="preptime"
                    timetext="Preparation time:"
                  />
                  <SelectTime
                    name="cooktime"
                    id="cooktime"
                    time="cooktime"
                    timetext="Cooking time:"
                  />
                  <div>
                    <label htmlFor="tags">Add tags:</label>
                    <Field name="tags" options={options}>
                      {({
                        field,
                        name,
                        value,
                        onChange,
                        form: { touched, errors, handleChange },
                        meta,
                      }) => (
                        <div>
                          <input
                            type="text"
                            {...field}
                            onChange={handleChange}
                          />
                        </div>
                      )}
                    </Field>
                    {/*  <SelectTags /> */}
                  </div>
                  <div className="instructions">
                    <label htmlFor="instructions">Instructions: </label>
                    <textarea
                      id="instructions"
                      name="instructions"
                      rows="5"
                    ></textarea>
                  </div>
                  <button className="submit-button" type="submit">
                    {submittext}
                  </button>
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  );
};

/* const SelectTags = () => {
  const initialTags = ["Indian", "Persian", "Meat", "Veggie", "Spicy", "Fast"];
  const [tagArray, setTagArray] = useState(initialTags);
  const [tag, setTag] = useState([""]);

  const submitHandler = () => {
    console.log("");
  };

  const changeHandler = (event) => {
    setTag(event.target.value);
    const updateTags = tagArray.filter((tag) => tag.match(event.target.value)? tag.);
    setTagArray(updateTags);
  };

  return (
    <div>
      <label htlmfor="tags" name="tags">
        Tags
      </label>
      <input name="tags" onChange={changeHandler} value={tag} />
      <ul className="proposedtag">
        {tagArray.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
      <button>Add tag</button>
    </div>
  );
}; */
/* const SelectTags = ({ options, field, form }) => {
  const tags = ["sweet", "bitter", "veggie", "persian"];
  console.log(tags);
  return (
    <Select
      defaultValue={[tags[2], tags[3]]}
      isMulti
      name="colors"
      options={tags}
      className="basic-multi-select"
      classNamePrefix="select"
    /> */
/*   <Select
    options={options}
    isMulti
    name={field.name}
    value={
      options ? options.find((option) => option.value === field.value) : ""
    }
    onChange={(option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
  /> */
/*   );
}; */

export default IngrList;
