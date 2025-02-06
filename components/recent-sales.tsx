import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">John Doe</p>
          <p className="text-sm text-muted-foreground">Residential Solar Installation</p>
        </div>
        <div className="ml-auto font-medium">+$25,000</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sarah Anderson</p>
          <p className="text-sm text-muted-foreground">Commercial Solar Project</p>
        </div>
        <div className="ml-auto font-medium">+$42,000</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Mike Chen</p>
          <p className="text-sm text-muted-foreground">Battery Storage System</p>
        </div>
        <div className="ml-auto font-medium">+$8,500</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>EM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Emma Martinez</p>
          <p className="text-sm text-muted-foreground">Solar Panel Maintenance</p>
        </div>
        <div className="ml-auto font-medium">+$1,200</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>RB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Robert Brown</p>
          <p className="text-sm text-muted-foreground">Solar Roof Installation</p>
        </div>
        <div className="ml-auto font-medium">+$32,000</div>
      </div>
    </div>
  )
}

