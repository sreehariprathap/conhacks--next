"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar"
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react"
import { Link } from "@nextui-org/link"
import { link as linkStyles } from "@nextui-org/theme"
import NextLink from "next/link"
import clsx from "clsx"
import { Button } from "@nextui-org/react"
import { ThemeSwitch } from "@/components/theme-switch"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"

export const Navbar = () => {
  const supabase = createClientComponentClient();

  const [user, setUser] = useState<User>();
  
  useEffect(() => {
    async function getUser() {
      let session = await supabase.auth.getSession();

      console.log({ session });
      setUser(session.data.session?.user);
    }

    getUser();
  }, [])

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="p-5">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src={"/favicon.ico"}
              width={"100"}
              height={"50"}
              alt="logo"
            />
            <p className="font-bold text-inherit text-3xl">
              lecture<span className="font-normal text-cyan-400">life</span>
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          <NavbarItem key={1}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"home"}
            >
              Home
            </NextLink>
          </NavbarItem>
          <NavbarItem key={1}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"calander"}
            >
              Calander
            </NextLink>
          </NavbarItem>
          <NavbarItem key={1}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"about"}
            >
              About
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        <UserData user={user} />
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem key={`1`}>
            <Link color={"primary"} href="home" size="lg">
              Home
            </Link>
            <Link color={"primary"} href="calander" size="lg">
              Calander
            </Link>
            <Link color={"primary"} href="about" size="lg">
              About
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}

const UserData: React.FC<any> = ({ user }) => {
  return (
    <div>
      {!user ? (
        <Button color="primary" onClick={() => redirect('/login')}>
          Login
        </Button>
      ) : (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user.email}</p>
            </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
              >
                <form action="/auth/logout" method="post">
                  <button>Log out</button>
                </form>
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  )
}
