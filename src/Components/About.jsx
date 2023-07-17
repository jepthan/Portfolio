import { useTranslation } from "react-i18next"

export default function About(props) {
    const { t } = useTranslation()

    return (
        <div className='w-screen h-[calc(100vh-65px)] text-white' name={props.name}>
            <h1 className="text-center text-3xl font-bold m-6">{t('about_header')}</h1>
            <div className="text-center m-auto max-w-3xl">
                {t("about_body")}
            </div>
            <div className="flex flex-wrap mt-14">
                <div className="w-96 grow bg-green">
                    <h1 className="text-center font-bold text-xl">Get to know me</h1>
                    <p className="text-lg p-4">
                        {t("about_body")}
                    </p>
                </div>
                <div className="w-96 grow bg-red ">
                    <h1 className="text-center font-bold text-xl">My skills</h1>
                    <p className="text-lg p-4">
                        {t("about_body")}
                        {t("about_body")}
                        {t("about_body")}
                    </p>
                </div>
            </div>
        </div>
    )
}