export const Footer = () => {
    return (
        <footer className="border-t-1 border-light-400 dark:border-dark-400 py-2 md:py-4">
            <p className="text-center text-light-400 dark:text-dark-400 text-sm md:text-md">
                &copy; {new Date().getFullYear()} Hexdle. All rights reserved.
            </p>
        </footer>
    )
}
