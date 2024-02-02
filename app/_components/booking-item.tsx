import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const BookingItem = () => {
  return (
    <div>
      <Card>
        <CardContent className="p-5">
          <div className="flex flex-col gap-2">
            <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">
              Confirmado
            </Badge>
            <h2 className="font-bold">Corte de Cabelo </h2>
            <div className="h-6 w-6">
              <Avatar>
                <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6d1-1kgxo7.png" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>

              <h3 className="text-sm">Vintage Barber</h3>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p>Fevereiro</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingItem;
