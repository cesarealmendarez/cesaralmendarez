export default function Footer() {
    return(
        <footer className="w-full flex flex-col items-center justify-end text-slate-500 mt-48 space-y-4">
            <p>Last Updated March 9 2023</p>
            <p>&copy; {new Date().getFullYear()} Cesar Almendarez. All Rights Reserved.</p>
        </footer>
    )
}