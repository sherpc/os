#include <stdio.h>

class Tree
{
  int count;

public:
  Tree(int c) : count(c) { }
  ~Tree() { printf("Goodbye!\n"); }

  void Print()
  {
    printf("%d\n", count);
  }

  void SetCount(int _count)
  {
    count = _count;
  }
};

int main()
{
  Tree* test = new Tree(6);
  //test->SetCount(3);
  test->Print();
  printf("Hello world!\n");
  delete test;
  return 0;
}
