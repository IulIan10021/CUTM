import { specialitati } from "../../data/specialitati"
import SpecialitatePage from "@/components/SpecialitatePage"


export default function Page({ params }) {
    const item = specialitati.find(s => s.slug === params.slug)

    if (!item) return <div>Nu există</div>

    return <SpecialitatePage data={item} />
}