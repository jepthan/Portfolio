import { useTranslation } from "react-i18next"

export default function About(props) {
    const { t } = useTranslation()

    return (
        <div className=' text-white' name={props.name}>
            <h1 className="text-center text-3xl font-bold m-6">{t('about_header')}</h1>
            <div className="text-center m-auto max-w-3xl">
                {t("about_body")}
            </div>
            <div className="flex flex-wrap mt-14">
                <div className="mr-6 ml-6 w-96 grow">
                    <h1 className="text-center font-bold text-xl mb-4">Get to know me</h1>
                    <p className="text-lg mb-3">
                        {t("about_content1p1")}
                    </p>
                    <p className="text-lg mb-3">
                        {t("about_content1p2")}
                    </p>
                    <p className="text-lg mb-3">
                        {t("about_content1p3")}
                    </p>
                </div>
                <div className="ml-6 mr-6 w-96 grow">
                    <h1 className="text-center font-bold text-xl">My skills</h1>
                    <div className="flex flex-wrap mt-4">
                        <div className="rounded bg-secondary px-4 py-2 mr-3 mb-3">
                            JavaScript
                        </div>
                        <div className="rounded bg-secondary px-4 py-2 mr-3 mb-3">
                            HTML
                        </div>
                        <div className="rounded bg-secondary px-4 py-2 mr-3 mb-3">
                            CSS
                        </div>
                        <div className="rounded bg-secondary px-4 py-2 mr-3 mb-3">
                            C#
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}