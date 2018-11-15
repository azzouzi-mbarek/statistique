<?php

namespace App\Http\Resources\Level;

use App\Models\Level\Level;
use Illuminate\Http\Resources\Json\JsonResource;

class LevelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [

            'type' => 'Feature',
            'properties' => [
                'id' => $this->id,
                'name' => $this->name,
                'country_id' => $this->country_id,
                'country'=>$this->Country->name,
                'region'=>$this->Country->Region->name,
                'category_level'=>'Region',
                'level_id' => $this->level_id,
                'population' => $this->population,
                'date_population' => $this->census_date_population,
                'n_localGovernment_included' => Level::all()->where('level_id', $this->id)->count(),
                'web_site'=> $this->web_site,
                'email'=> $this->email,
                'number_phone'=>$this->number_phone,
                'address'=>$this->address,
                'date_population'=>$this->census_date_population,
            ],
            'geometry' => $this->shape,

            // 'population' => [
            //     'link' => (function () {

            //         return route('population.index', [$this->country_id, $this->id]);
            //     })(),
            // ],
            // 'legal_framework' => [
            //     'link' => (function () {

            //         return route('legal_frameworks.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],
            // 'leaderships' => [
            //     'link' => (function () {

            //         return route('persons.index', [$this->country_id, $this->id]);
            //     })(),
            // ],
            // 'communication_tools' => [
            //     'link' => (function () {

            //         return route('communication_tools.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],
            // 'finances' => [
            //     'link' => (function () {

            //         return route('finances.index', [$this->country_id, $this->id]);
            //     })(),
            // ],
            // 'evenements' => [
            //     'link' => (function () {

            //         return route('evenements.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],
            // 'programmes' => [
            //     'link' => (function () {

            //         return route('programmes.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],
            // 'Partenaires' => [
            //     'link' => (function () {

            //         return route('institutions.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],

            // 'Indicators of transparency' => [
            //     'link' => (function () {

            //         return route('indicators.index', [ $this->country_id, $this->id]);
            //     })(),
            // ],

            // 'level_id' => $this->level,

            // 'key' => $this->key,
            // 'href' => [
            //     'child_levels ' => (function () {

            //         return route('levels.index', [$this->country_id, 'id' => $this->id]);

            //     })(),
            // ],
        ];
    }
}
