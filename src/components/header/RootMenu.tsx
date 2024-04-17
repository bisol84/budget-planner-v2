"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ThemeChanger";
import ConfigMenu from "./ConfigMenu";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";
import { useState } from "react";

export default function RootMenu({ className }: { className: string }) {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <>
      {/* md-large screen */}
      <NavigationMenu className={className && "hidden sm:block md:block"}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Tableau de bord
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/budget" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Budget
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/accounts" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Comptes
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/transactions" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Transactions
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex invisible sm:visible md:visible mr-2">
        <ModeToggle />
        <ConfigMenu />
      </div>

      {/* Mobile */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            onClick={() => setDisplayMenu(true)}
            className="block sm:hidden md:hidden mr-2"
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </PopoverTrigger>
        {displayMenu && (
          <PopoverContent className="w-auto">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Button variant="outline" onClick={() => setDisplayMenu(false)}>
                  <Link href="/dashboard" legacyBehavior passHref>
                    Tableau de bord
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => setDisplayMenu(false)}>
                  <Link href="/budget" legacyBehavior passHref>
                    Budget
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => setDisplayMenu(false)}>
                  <Link href="/accounts" legacyBehavior passHref>
                    Comptes
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => setDisplayMenu(false)}>
                  <Link href="/transactions" legacyBehavior passHref>
                    Transactions
                  </Link>
                </Button>
              </div>
            </div>
          </PopoverContent>
        )}
      </Popover>
    </>
  );
}
