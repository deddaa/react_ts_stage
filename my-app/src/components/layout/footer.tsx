interface FooterProps {
    companyName: string;
    date: number;
}

function Footer({ companyName, date }: FooterProps) {
    return (
        <footer className='bg-gray-800 text-gray-400 text-center py-4 mt-8'>
            <p>&copy; {date} - {companyName} - All rights reserved</p>
        </footer>
    )
}

export default Footer;