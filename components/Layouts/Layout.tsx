import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, useContext } from 'react'
import { UIContext } from '../../context/ui'
import AuthModal from '../AuthModal'
import { NavBar } from "../index"

interface Props {
    title: string,
    children: any,
    image?: string,
    type?: string,
    description?: string
    keywords?: string
}

export const Layout: FC<Props> = ({
    title,
    children,
    image = '/300x300.png',
    type = 'website',
    keywords,
    description = 'Espacio para artes y crear lo que te mueve. Escenario: 116 𝕙𝕦𝕞𝕒𝕟𝕠𝕤 por evento. Salas multifuncionales para cursos, alquileres, deseos'
}) => {

    const { asPath } = useRouter()

    const { visible, setVisible, modalType, searchVisible, setSearchVisible } = useContext(UIContext)

    return (
        <>
            <Head>
                <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
                <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
                <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
                <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
                <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
                <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
                <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
                <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/manifest.json' />
                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
                <meta name='theme-color' content='#ffffff' />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta property='og:url' content={`https://4orium.com${asPath}`} />
                <meta property='og:type' content={type} />
                <meta property='og:title' content={title} />
                <meta property='og:image' content={image} />
                <meta property='og:image:alt' content='Logo de 4orium.' />
                <meta property='og:description' content={description} />
                <meta property='og:site_name' content='4orium' />
                <meta property='og:locale' content='es_MX' />
                <title>{`4orium | ${title}`}</title>
            </Head>

            <NavBar />
            <AuthModal
                onClose={() => { setVisible(false) }}
                visible={visible}
                type={modalType}
            />
            <div className="mainContent">
                {children}
            </div>

        </>
    )

}