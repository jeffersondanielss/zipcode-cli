# Zipcode CLI


## Instalação

Clone o repositório, entre na pasta e execute:

```bash
$ npm install -g
```

## Como usar

```bash
$ zipcode <cep>
```

### Opções

Mostrar apenas a logradouro, `-l, --logradouro`.

```bash
$ zipcode <cep> -a
```

Mostrar apenas a cidade, `-c, --cidade`.

```bash
$ zipcode <cep> -c
```
  
Mostrar apenas o estado, `-e, --estado`.

```bash
$ zipcode <cep> -s
```

Mostrar apenas o bairro, `-b, --bairro`.

```bash
$ zipcode <cep> -d
```

Combinação de parametros, `-lbce`.

```bash
$ zipcode <cep> -lbce
```

### lisence
MIT