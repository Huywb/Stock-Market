'use client'
import React, { useState } from 'react'
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
import countryList from 'react-select-country-list'
import { Button } from '../ui/button'
const CountrySelect = ({name, label , control, required = false, error}:CountrySelectProps) => {
  
  const countries = countryList().getData()  
  const [open, setOpen] = useState(false)
  const [localValue, setLocalValue] = useState<string | null>(null)

  const getFlagEmoji = (countryCode: string) => {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

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
            render={({field})=>{
                const displayvalue = field.value ?? localValue
                return (
                <Popover open={open} onOpenChange={setOpen} >
                    <PopoverTrigger asChild className=''>
                      <Button variant='ghost' className='country-select-trigger'>
                        {displayvalue ? displayvalue : "Choose your country"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-full p-0'  >
                        <Command className='country-select-input scrollbar-hide-default w-full '>
                            <CommandInput  placeholder="Type a command or search..." />
                            <CommandList className='max-h-60 '>
                                <CommandEmpty>No country found.</CommandEmpty>
                                {countries.map(country=>(
                                <CommandItem key={country.value} 
                                onSelect={()=>{ 
                                            field.onChange(country.label)
                                            setLocalValue(country.label)
                                            setOpen(false)
                                }}>{getFlagEmoji(country.value)} {country.label}</CommandItem>
                                ))}
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            )}}
      />
      {error && <p className='text-sm text-red-500'>{error.message}</p>}
    </div>
  )
}

export default CountrySelect
