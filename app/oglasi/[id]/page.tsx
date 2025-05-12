// 3. app/oglasi/[id]/page.tsx - detalji oglasa
import AdDetail from "../../components/AdDetail";
export default function AdDetailPage({ params }) {
    return <AdDetail id={params.id} />;
}
