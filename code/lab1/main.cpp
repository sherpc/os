#include <stdio.h>

template<class T>
class Tree
{
  T count;

public:
  Tree(T c) : count(c) { }
  ~Tree() { printf("Goodbye!\n"); }

  void PrintInt()
  {
    printf("%d\n", count);
  }

  void PrintChar()
  {
    printf("%c\n", count);
  }

  void SetCount(T _count)
  {
    count = _count;
  }
};

int main()
{
  Tree<int> *test = new Tree<int>(6);
  Tree<char> *test2 = new Tree<char>('r');
  test->SetCount(3);
  test->PrintInt();
  test2->PrintChar();
  delete test;
  delete test2;
  return 0;
}
