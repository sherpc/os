#include <stdio.h>
template<class T>
class list
{
public:
  struct elem;

  struct link 
  {
    elem *p, *n;
    link(elem *p, elem *n) : p(p), n(n) { }
  };

  link b;

  static elem* coerce(link* l) { return reinterpret_cast<elem*>(l); }

  struct elem
  {
    link l;
    T data;

    elem(link l, T data) : l(l), data(data) { }
  };

  list() : b(coerce(&b),coerce(&b)) { }

  elem* get_b()
  {
    return coerce(&b);
  }

  void insert(elem* where,const T &x)
  {
    elem* current = new elem(link(where, where->l.n), x);
    where->l.n->l.p = current;
    where->l.n = current;
  }

  bool empty()
  {
    return b.n == b.p;
  }

};

template<class T>
class listIterator
{
  typename list<T>::elem* current;
public:
  listIterator(typename list<T>::link* root) 
  {
    current = root->n;
  }

  T getCurrent() { return current->data; }

  void next()
  {
    current = current->l.n;
  }

  friend class list<T>;
};

int main()
{
  list<int>* il = new list<int>();
  il->insert(il->get_b(), 3);
  il->insert(il->get_b(), 5);


  listIterator<int>* iter = new listIterator<int>(&(il->b));
  printf("%d\n", iter->getCurrent());
  iter->next();
  printf("%d\n", iter->getCurrent());
  iter->next();
  printf("%d\n", iter->getCurrent());
  iter->next();
  printf("%d\n", iter->getCurrent());
  iter->next();
  printf("%d\n", iter->getCurrent());

  list<list<int> >* listOfList = new list<list<int> >();
  listOfList->insert(listOfList->get_b(), *il);
  return 0;
}
