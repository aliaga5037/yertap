export type IconsId =
  | "all"
  | "arrow"
  | "ball"
  | "bell"
  | "book"
  | "bookmark-marked"
  | "bookmark"
  | "burger"
  | "business_lunch"
  | "car"
  | "care"
  | "check"
  | "clap"
  | "close"
  | "crown"
  | "date"
  | "district"
  | "egg"
  | "ellipse"
  | "feather"
  | "filter"
  | "food"
  | "fork_spoon"
  | "gps"
  | "health"
  | "home"
  | "lang"
  | "load"
  | "logo"
  | "money_bag"
  | "more"
  | "pet"
  | "photo"
  | "pin"
  | "pizza"
  | "plate"
  | "price"
  | "reply"
  | "search"
  | "share"
  | "shop"
  | "star"
  | "steak"
  | "travel"
  | "user"
  | "zoom";

export type IconsKey =
  | "All"
  | "Arrow"
  | "Ball"
  | "Bell"
  | "Book"
  | "BookmarkMarked"
  | "Bookmark"
  | "Burger"
  | "BusinessLunch"
  | "Car"
  | "Care"
  | "Check"
  | "Clap"
  | "Close"
  | "Crown"
  | "Date"
  | "District"
  | "Egg"
  | "Ellipse"
  | "Feather"
  | "Filter"
  | "Food"
  | "ForkSpoon"
  | "Gps"
  | "Health"
  | "Home"
  | "Lang"
  | "Load"
  | "Logo"
  | "MoneyBag"
  | "More"
  | "Pet"
  | "Photo"
  | "Pin"
  | "Pizza"
  | "Plate"
  | "Price"
  | "Reply"
  | "Search"
  | "Share"
  | "Shop"
  | "Star"
  | "Steak"
  | "Travel"
  | "User"
  | "Zoom";

export enum Icons {
  All = "all",
  Arrow = "arrow",
  Ball = "ball",
  Bell = "bell",
  Book = "book",
  BookmarkMarked = "bookmark-marked",
  Bookmark = "bookmark",
  Burger = "burger",
  BusinessLunch = "business_lunch",
  Car = "car",
  Care = "care",
  Check = "check",
  Clap = "clap",
  Close = "close",
  Crown = "crown",
  Date = "date",
  District = "district",
  Egg = "egg",
  Ellipse = "ellipse",
  Feather = "feather",
  Filter = "filter",
  Food = "food",
  ForkSpoon = "fork_spoon",
  Gps = "gps",
  Health = "health",
  Home = "home",
  Lang = "lang",
  Load = "load",
  Logo = "logo",
  MoneyBag = "money_bag",
  More = "more",
  Pet = "pet",
  Photo = "photo",
  Pin = "pin",
  Pizza = "pizza",
  Plate = "plate",
  Price = "price",
  Reply = "reply",
  Search = "search",
  Share = "share",
  Shop = "shop",
  Star = "star",
  Steak = "steak",
  Travel = "travel",
  User = "user",
  Zoom = "zoom",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.All]: "61697",
  [Icons.Arrow]: "61698",
  [Icons.Ball]: "61699",
  [Icons.Bell]: "61700",
  [Icons.Book]: "61701",
  [Icons.BookmarkMarked]: "61702",
  [Icons.Bookmark]: "61703",
  [Icons.Burger]: "61704",
  [Icons.BusinessLunch]: "61705",
  [Icons.Car]: "61706",
  [Icons.Care]: "61707",
  [Icons.Check]: "61708",
  [Icons.Clap]: "61709",
  [Icons.Close]: "61710",
  [Icons.Crown]: "61711",
  [Icons.Date]: "61712",
  [Icons.District]: "61713",
  [Icons.Egg]: "61714",
  [Icons.Ellipse]: "61715",
  [Icons.Feather]: "61716",
  [Icons.Filter]: "61717",
  [Icons.Food]: "61718",
  [Icons.ForkSpoon]: "61719",
  [Icons.Gps]: "61720",
  [Icons.Health]: "61721",
  [Icons.Home]: "61722",
  [Icons.Lang]: "61723",
  [Icons.Load]: "61724",
  [Icons.Logo]: "61725",
  [Icons.MoneyBag]: "61726",
  [Icons.More]: "61727",
  [Icons.Pet]: "61728",
  [Icons.Photo]: "61729",
  [Icons.Pin]: "61730",
  [Icons.Pizza]: "61731",
  [Icons.Plate]: "61732",
  [Icons.Price]: "61733",
  [Icons.Reply]: "61734",
  [Icons.Search]: "61735",
  [Icons.Share]: "61736",
  [Icons.Shop]: "61737",
  [Icons.Star]: "61738",
  [Icons.Steak]: "61739",
  [Icons.Travel]: "61740",
  [Icons.User]: "61741",
  [Icons.Zoom]: "61742",
};
