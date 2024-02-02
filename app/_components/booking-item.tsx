import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const BookingItem = () => {
  return (
    
    <div>
      <Card>
        <CardContent className="p-5 flex justify-between py-0">
          <div className="flex flex-col gap-2 py-5">
            <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">
              Confirmado
            </Badge>
            <h2 className="font-bold">Corte de Cabelo </h2>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://s3-alpha-sig.figma.com/img/2f7f/0250/6b545e7df7f46978c54489089e18d1db?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DBXlBgROueSNGHG~sUxTs65Ig1Yg7FFIfAqA6x9g1i1QgXAlzY4b7mGxchVfuqwgwVUYnpCRU2TwCjUFm6fg5MwFKVAnIUEtg6pB66wSG~i1a8ri34icRD2aI1EbSH-Dy8ahMID7-C8InWrJsIiA2fpHjzQoPChfnZ7k2XiXiZn4QyhTWlTsVYPqC~ZMz8cTensODKj9rv6z5jN2omdtnGkVyuLcirkHmHNMct4EJ-pgniaI6jszb-zn3qj61AWFEhKI5-5lQVFryERX~-7qlMzy~rMwdlIoKoisjjVhiFD2oCrbr3uZN8d3XveK7k95OGxm6L8~1GYHzoI8vxZwGg__" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>

              <h3 className="text-sm">Vintage Barber</h3>
            </div>
          </div>
   

            <div className="flex flex-col items-center justify-center border-l border-solid border-secondary">
                <p className="text-sm">Fevereiro</p>
                <p className="text 2xl">06</p>
                <p className="text-sm">09:45</p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingItem;
