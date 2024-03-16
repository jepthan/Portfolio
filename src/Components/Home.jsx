import { useTranslation } from "react-i18next"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { use } from "i18next";
import Home3dRender from "./Home3dRender";
import Loading from "./Loading";

export default function Home(props) {

    const { t } = useTranslation()



    return (
        <div className=" justify-center " name={props.name}>

            <div className=" max-h-[30rem] md:max-h-[90rem] md:max-w-[50%] md:absolute top-[25%] left-[8%]" >
                <h1 className="text-center text-5xl mb-10 px-10 mt-14  md:mt-36 ">{t("home_title")}</h1>
                <p className="text-center text-2xl mt-10 px-10">{t("home_description")}</p>
            </div>
            
            <Home3dRender />
            
            

        </div>
    )
}