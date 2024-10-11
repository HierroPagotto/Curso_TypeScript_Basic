// Record
const objeto1: Record<string, string | number> = {
  nome: 'Hierro',
  sobrenome: 'Pagotto',
  idade: 19,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

type PessoaRequired = Required<PessoaProtocol>;
type PessoaPartial = Partial<PessoaRequired>;
type PessoaReadonly = Readonly<PessoaRequired>;
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Hierro',
  sobrenome: 'Pagotto',
  idade: 19,
};
console.log(objeto2);

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asfd9p8a7sdf90a8s76f9as',
  nome: 'Hierro',
  idade: 19,
  sobrenome: 'Pagotto',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

export default 1;
