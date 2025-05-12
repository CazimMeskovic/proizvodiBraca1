// 4. app/novi-oglas/page.tsx - forma za novi oglas
import AdForm from "../components/AdForm";
export default function NewAdPage() {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Novi oglas</h1>
            <AdForm />
        </div>
    );
}
