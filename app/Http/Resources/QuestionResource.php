<?php

namespace App\Http\Resources;

use App\Http\Resources\ReplyResource;
use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'path' => $this->path,
            'body' => $this->body,
            'created_at' => $this->created_at->diffForHumans(),
            'username' => $this->user->name,
            'user_id' => $this->user->id,
            'replies' => ReplyResource::collection($this->replies),
            'reply_count' => $this->replies->count(),
            'cat_name' => $this->category->name
        ];
    }
}
