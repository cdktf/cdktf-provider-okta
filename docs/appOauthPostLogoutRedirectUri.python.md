# `appOauthPostLogoutRedirectUri` Submodule <a name="`appOauthPostLogoutRedirectUri` Submodule" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppOauthPostLogoutRedirectUri <a name="AppOauthPostLogoutRedirectUri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_post_logout_redirect_uri okta_app_oauth_post_logout_redirect_uri}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_oauth_post_logout_redirect_uri

appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  uri: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | OAuth application ID. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.uri">uri</a></code> | <code>str</code> | Post Logout Redirect URI to append to Okta OIDC application. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.appId"></a>

- *Type:* str

OAuth application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_post_logout_redirect_uri#app_id AppOauthPostLogoutRedirectUri#app_id}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.uri"></a>

- *Type:* str

Post Logout Redirect URI to append to Okta OIDC application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_post_logout_redirect_uri#uri AppOauthPostLogoutRedirectUri#uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppOauthPostLogoutRedirectUri resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_oauth_post_logout_redirect_uri

appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_oauth_post_logout_redirect_uri

appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_oauth_post_logout_redirect_uri

appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import app_oauth_post_logout_redirect_uri

appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppOauthPostLogoutRedirectUri resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppOauthPostLogoutRedirectUri to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppOauthPostLogoutRedirectUri that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_post_logout_redirect_uri#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppOauthPostLogoutRedirectUri to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uri">uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppOauthPostLogoutRedirectUriConfig <a name="AppOauthPostLogoutRedirectUriConfig" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_oauth_post_logout_redirect_uri

appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  uri: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.appId">app_id</a></code> | <code>str</code> | OAuth application ID. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.uri">uri</a></code> | <code>str</code> | Post Logout Redirect URI to append to Okta OIDC application. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

OAuth application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_post_logout_redirect_uri#app_id AppOauthPostLogoutRedirectUri#app_id}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.uri"></a>

```python
uri: str
```

- *Type:* str

Post Logout Redirect URI to append to Okta OIDC application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_post_logout_redirect_uri#uri AppOauthPostLogoutRedirectUri#uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



