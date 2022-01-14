// https://www.terraform.io/docs/providers/okta/d/trusted_origins
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaTrustedOriginsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter criteria. Filter value will be URL-encoded by the provider
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/trusted_origins#filter DataOktaTrustedOrigins#filter}
  */
  readonly filter?: string;
}
export class DataOktaTrustedOriginsTrustedOrigins extends cdktf.ComplexComputedList {

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active') as any;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/trusted_origins okta_trusted_origins}
*/
export class DataOktaTrustedOrigins extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_trusted_origins";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/trusted_origins okta_trusted_origins} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaTrustedOriginsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaTrustedOriginsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_trusted_origins',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // trusted_origins - computed: true, optional: false, required: false
  public trustedOrigins(index: string) {
    return new DataOktaTrustedOriginsTrustedOrigins(this, 'trusted_origins', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
    };
  }
}
