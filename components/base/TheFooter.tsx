"use client"

import Link from "next/link";
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export const TheFooter = () => {
  return (
    <footer className='bg-black-600 text-white'>
      <div className='custom-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10 gap-y-10'>
        <div>
          <h3 className='text-2xl text-toxic font-bold mb-2 sm:mb-4'>
            CATEGORIES
          </h3>
          <nav>
            <ul className='grid grid-cols-2 gap-1 overflow-hidden'>
              {/*{*/}
              {/*  categories.map((category: Category) => (*/}
              {/*    <li key={category.slug}>*/}
              {/*      <Link*/}
              {/*        href='/'*/}
              {/*        className='uppercase text-lg font-medium transition-colors hover:text-toxic'*/}
              {/*      >*/}
              {/*        { category.name }*/}
              {/*      </Link>*/}
              {/*    </li>*/}
              {/*  ))*/}
              {/*}*/}
            </ul>
          </nav>
        </div>
        <div className='lg:justify-self-center'>
          <h3 className='text-2xl text-toxic font-bold mb-2 sm:mb-4'>
            FOR CUSTOMERS
          </h3>
          <nav>
            <ul className='grid grid-cols-1 gap-1 overflow-hidden'>
              {/*{*/}
              {/*  footerData?.for_customers?.map((link: LinkType) => (*/}
              {/*    <li key={link.href}>*/}
              {/*      <Link*/}
              {/*        href={link.href}*/}
              {/*        className='uppercase text-lg font-medium transition-colors hover:text-toxic'*/}
              {/*      >*/}
              {/*        {link.title}*/}
              {/*      </Link>*/}
              {/*    </li>*/}
              {/*  ))*/}
              {/*}*/}
            </ul>
          </nav>
        </div>
        <div className='lg:justify-self-center'>
          <h3 className='text-2xl text-toxic font-bold mb-2 sm:mb-4'>
            LINKS
          </h3>
          <nav>
            <ul className='flex gap-4 overflow-hidden'>
              <li>
                <Link
                  href='https://www.instagram.com/eremeev23/'
                  className='transition-colors hover:text-toxic'
                  title='Instagram'
                  target='_blank'
                >
                  <InstagramIcon fontSize='large' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://t.me/eremeev23'
                  className='transition-colors hover:text-toxic'
                  title='Telegram'
                  target='_blank'
                >
                  <TelegramIcon fontSize='large' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.linkedin.com/in/maksim-eremeev-6446101a9/'
                  className='transition-colors hover:text-toxic'
                  title='Linkedin'
                  target='_blank'
                >
                  <LinkedInIcon fontSize='large' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://github.com/eremeev23'
                  className='transition-colors hover:text-toxic'
                  title='GitHub'
                  target='_blank'
                >
                  <GitHubIcon fontSize='large' />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='py-3 flex justify-center text-xs border-t-3 border-white'>
        <Link
          href="https://eremeev-dev.vercel.app/"
          className='transition-colors hover:text-toxic'
          target='_blank'
        >
          made by MAKSIM EREMEEV © { new Date().getFullYear() }
        </Link>
      </div>
    </footer>
  )
}
