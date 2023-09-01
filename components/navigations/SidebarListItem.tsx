import Link from "next/link";
import { Category } from "@/types/data";

interface IProps {
  category: Category;
  setChildren?: Function;
  setChildActive?: Function;
  setParentCat?: Function;
  parent?: string;
}

export const SidebarListItem = ({ category, setChildren, setChildActive, setParentCat, parent }: IProps) => {
  const mouseEnterHandler = () => {
    if (setChildActive && setParentCat) {
      setChildActive(true);
      setParentCat(category.slug);
    }
  }

  const linkHref = !!parent
    ? `/categories/${parent}/${category.tags[0] ? category.tags[0] : category.slug}`
    : `/categories/${category.tags[0] ? category.tags[0] : category.slug}`;

  return (
    <div>
      <Link
        href={linkHref}
        className='block w-full text-left py-3 uppercase text-lg font-bold transition-colors hover:text-blue-600 dark:hover:text-toxic'
        onMouseEnter={mouseEnterHandler}
        onMouseOver={() => setChildren ? setChildren(category.children) : null}
      >
        { category.name }
      </Link>
    </div>
  )
}
