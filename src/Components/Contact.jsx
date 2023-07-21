import { useTranslation } from "react-i18next"
export default function Contact(props) {

    const {t} = useTranslation()
    return (
        <div className=' text-col_text' name={props.name}>
            <h1 >{t('nav_contact')}</h1>
            <div >
                Erat eos erat exerci dolor sed sea dolore clita esse nisl amet vel.
                Lorem et labore aliquyam invidunt esse diam erat justo nulla ea justo sed gubergren.
                Nonumy molestie et te diam sed ipsum et et adipiscing duis diam. Stet ipsum justo amet
                velit in esse lobortis eos takimata consectetuer vel. Lorem sit autem. Sed sit dolore
                autem et delenit accusam tation sadipscing ut clita duo suscipit
                praesent velit dolor. Dolores sed exerci praesent. Tempor sadipscing sit eos aliquyam
                erat stet diam sadipscing ipsum sit dolore nisl duis vero. Aliquyam duo volutpat. Nihil
                liber invidunt dolore vel no sea zzril consetetur dolore no et vulputate stet no eirmod.
                Gubergren et dolor id volutpat dolore gubergren amet sadipscing rebum. Aliquyam erat stet
                takimata amet eirmod consectetuer sit et dolore liber in eros dolore sit kasd sadipscing
                aliquyam. Ipsum lorem ipsum. Et molestie delenit ea voluptua consetetur aliquyam esse nulla
                amet wisi amet ea. Dolor diam invidunt stet eros justo no justo. Diam dolor no labore duo
                velit et sadipscing dolor dolore imperdiet amet. Congue vel vero sanctus diam ipsum stet
                aliquyam sadipscing invidunt dolore minim diam. Qui vero rebum ut iriure minim et eirmod
                accusam ipsum dolor clita sit vel sit. Kasd ipsum rebum euismod dolor aliquip labore lorem
                sed kasd gubergren et ut quis diam. Sed accusam tempor ea diam rebum est wisi et kasd. Vero
                duis sed dolore sed sed voluptua voluptua nonummy dolores et est. Accusam consetetur sanctus
                nonummy diam nonumy ipsum aliquyam no at labore eum volutpat invidunt clita dolor.
                Nibh elitr invidunt eirmod ea ut sit vel eos nonumy sadipscing molestie. Ipsum magna
                ut sit vel vel takimata sadipscing clita adipiscing sed dolore. Eirmod consetetur
                elitr facilisis elitr. Sed et vulputate eirmod molestie. Et ipsum sanctus tempor
                sea sit gubergren rebum consetetur sanctus ipsum diam ut feugait velit sed. Sit
                kasd amet et duo justo sanctus commodo amet wisi eu takimata et vel sadipscing sed ut et.
            </div>
        </div>
    )
}