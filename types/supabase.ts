export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          class: string | null
          description: string | null
          dtstamp: string | null
          end_timestamp: string | null
          event_id: number
          event_type: string | null
          last_modified: string | null
          location: string | null
          method: string | null
          sequence: number | null
          start_timestamp: string | null
          summary: string | null
          uid: string | null
          user_id: string
        }
        Insert: {
          class?: string | null
          description?: string | null
          dtstamp?: string | null
          end_timestamp?: string | null
          event_id?: number
          event_type?: string | null
          last_modified?: string | null
          location?: string | null
          method?: string | null
          sequence?: number | null
          start_timestamp?: string | null
          summary?: string | null
          uid?: string | null
          user_id: string
        }
        Update: {
          class?: string | null
          description?: string | null
          dtstamp?: string | null
          end_timestamp?: string | null
          event_id?: number
          event_type?: string | null
          last_modified?: string | null
          location?: string | null
          method?: string | null
          sequence?: number | null
          start_timestamp?: string | null
          summary?: string | null
          uid?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

