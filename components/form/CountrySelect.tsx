import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Label } from '../ui/label'
import { Controller } from 'react-hook-form'
const CountrySelect = ({name, label , control, required = false, error}:CountrySelectProps) => {
  return (
    <div className='space-y-2'>
        <Label htmlFor={name} className='form-label'>
            {label}
        </Label>
        <Controller 
            name={name}
            control={control}
            rules={{
                required: required ? `Please select ${label.toLowerCase()}` : false,
            }}
            render={({field})=>(
                <Popover>
                    <PopoverTrigger className='country-select-trigger'>Choose your country</PopoverTrigger>
                    <PopoverContent className='country-select-input '>
                        <Command className='country-select-input '>
                            <CommandInput placeholder="Type a command or search..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions">
                                <CommandItem>USA</CommandItem>
                                <CommandItem>Viet Nam</CommandItem>
                                <CommandItem>China</CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            )}
      />
    </div>
  )
}

export default CountrySelect
