import React from "react";
import "./editrecipe.scss";
import FormikNewRecipe from "../../newrecipe/FormikNewRecipe";
import { useParams } from "react-router-dom";
import recipes from "../../../data/Data";

const Editrecipe = ({ headline, submittext }) => {
  return (
    <div>
      <FormikNewRecipe headline="Edit Recipe" submittext="Save changes" />
    </div>
  );
};

export default Editrecipe;
