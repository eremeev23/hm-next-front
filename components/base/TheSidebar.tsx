"use client";

import {Dispatch, SetStateAction, useState} from "react";
// @ts-ignore
import Modal from "react-modal";
import { SidebarListItem } from "@/components/navigations/SidebarListItem";
import {Category} from "@/types/data";

const customStyles = {
  overlay: {
    background: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(6px)",
  },
};

const customStylesSec = {
  overlay: {
    background: "none",
    backdropFilter: "none",
    pointerEvents: "none",
  },
};

Modal.setAppElement("body");

interface Props {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  closeModals: () => void;
  categories: Category[]
}

export const TheSidebar = ({ active, setActive, closeModals, categories }: Props) => {
  const [children, setChildren] = useState([] as Category[]);
  const [childActive, setChildActive] = useState(false);
  const [parentCat, setParentCat] = useState("");

  return (
    <Modal isOpen={active} onRequestClose={closeModals} style={customStyles}>
      <nav>
        <ul className="h-full flex flex-col justify-center">
          {categories.map((category: Category) => {
            return (
              <li key={category._id}>
                <SidebarListItem
                  category={category}
                  setChildren={setChildren}
                  setChildActive={setChildActive}
                  setParentCat={setParentCat}
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <Modal
        isOpen={childActive && children?.length}
        onRequestClose={() => setChildActive(false)}
        className="children-categories-modal hidden sm:block"
        style={customStylesSec}
      >
        <nav>
          <ul
            className="h-full flex flex-col justify-center"
            onMouseLeave={() => setChildActive(false)}
          >
            {children?.map((category) => {
              return (
                <li key={category._id}>
                  <SidebarListItem
                    category={category}
                    parent={parentCat}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </Modal>
    </Modal>
  );
};
