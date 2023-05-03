import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity ('despesas')
export class Despesa {
    @PrimaryGeneratedColumn ()
id_desp! : number;
@Column ()
descricao_desp! : string;
@Column ()
data_desp! : Date;
@Column ()
data_efetivacao_desp! : Date;
@Column ()
valor_desp! : number;
@Column()
valor_pago_desp! : number;
@Column ()
pago_desp! : boolean;

}