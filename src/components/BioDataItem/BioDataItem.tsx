import { Id } from "@reduxjs/toolkit/dist/tsHelpers";
import React from "react";
import { Url } from "url";
import { Icon } from "../UI/Header/icon/icon";

type BioDataItemProperty = {
  className: string
  maintext: string
  spantext: string
}

export const BioDataItem = ({maintext, spantext, className}: BioDataItemProperty) => {
    return (
        <div className="data__item">
              <Icon name={className} borderRadius="10" padding="10"/>
              <p className="main__text">
                {maintext} <span>{spantext}</span>
              </p>
        </div>
    )
}