#include "hash.h"
#include <iostream>

int main()
{
  Hash<int, char> h;
  std::cout << h.Length() << std::endl;
  h.Add(3, 'c');
  //h.Print();
  return 0;
}
