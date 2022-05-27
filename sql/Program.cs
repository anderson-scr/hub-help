using System;

namespace proj9Aula5
{
    class Program
    {
        static void imprimeMatriz(int[,] matriz, int n)
        {
            for (int i = -1; i <= n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    if (i < 0 || i == n)
                    {
                        if (n == 1)
                            Console.Write(" -");
                        else if (j == 0)
                            Console.Write(" --");
                        else if (j == n - 1)
                            Console.Write("-");
                        else
                            Console.Write("--");
                    }
                    else
                    {
                        if (j == 0)
                            Console.Write("|");

                        Console.Write(j == n - 1 ? $"{matriz[i, j]}|" : $"{matriz[i, j]} ");
                    }
                }
                Console.WriteLine();
            }
            Console.WriteLine();
        }
        static void Main(string[] args)
        {
            while(true)
            {
                Int32.TryParse(Console.ReadLine(), out int n);
                if (n == 0)
                    break;

                var matriz = new int[n, n];
                for (int i = 0; i < n; i++)
                    for (int j = 0; j < n; j++)
                        matriz[i, j] = Math.Abs(j - i) + 1;

                imprimeMatriz(matriz, n);
            }
        }
    }
}
