import { Game } from './game';
import { Strategy } from './strategy';

export class GameRun {
    public game?: Game;

    public strategies?: Strategy[];

    public outputJson?: string;

    public error?: string;
}
