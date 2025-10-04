'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import React, { use } from 'react'
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { LogOut } from "lucide-react"
import NavItem from "./NavItem"

const UserDropdownMenu = () => {
  const router = useRouter()
  
  const handleSumit = async () =>{
    router.push("/sign-in")
  }

  const handleSignOut = async()=>{}
  const user = {name : "Huy", email: "Huypham@gmail.com"}
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant='ghost' className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent >
        <DropdownMenuLabel className="flex items-center justify-center gap-4 text-gray-300 ">          
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start text-sm">
            <span className="text-base">
              {user.name}
            </span>
            <span className="text-base text-gray-500">
              {user.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="sm:hidden bg-gray-500"></DropdownMenuSeparator>
          <nav className="sm:hidden">
            <NavItem></NavItem>
          </nav>
        <DropdownMenuSeparator className="bg-gray-500"></DropdownMenuSeparator>
        <DropdownMenuItem onClick={handleSignOut} className="text-gray-400 text-md">
          <LogOut className="h-4 w-4 mr-2 hidden sm:block"></LogOut>Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdownMenu
