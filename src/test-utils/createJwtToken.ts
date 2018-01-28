import jwtSimple from 'jwt-simple';

const defaultExp = (): number => (new Date().getTime() / 1000) + 3600;
export default (exp: number = defaultExp()): string => jwtSimple.encode({ exp }, 'secret');
