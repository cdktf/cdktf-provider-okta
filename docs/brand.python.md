# `brand` Submodule <a name="`brand` Submodule" id="@cdktf/provider-okta.brand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Brand <a name="Brand" id="@cdktf/provider-okta.brand.Brand"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand okta_brand}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.brand.Brand.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import brand

brand.Brand(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  agree_to_custom_privacy_policy: typing.Union[bool, IResolvable] = None,
  brand_id: str = None,
  custom_privacy_policy_url: str = None,
  default_app_app_instance_id: str = None,
  default_app_app_link_name: str = None,
  default_app_classic_application_uri: str = None,
  locale: str = None,
  remove_powered_by_okta: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the brand. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.agreeToCustomPrivacyPolicy">agree_to_custom_privacy_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is a required input flag with when changing custom_privacy_url, shouldn't be considered as a readable property. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.brandId">brand_id</a></code> | <code>str</code> | Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.customPrivacyPolicyUrl">custom_privacy_policy_url</a></code> | <code>str</code> | Custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.defaultAppAppInstanceId">default_app_app_instance_id</a></code> | <code>str</code> | Default app app instance id. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.defaultAppAppLinkName">default_app_app_link_name</a></code> | <code>str</code> | Default app app link name. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.defaultAppClassicApplicationUri">default_app_classic_application_uri</a></code> | <code>str</code> | Default app classic application uri. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.locale">locale</a></code> | <code>str</code> | The language specified as an IETF BCP 47 language tag. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.removePoweredByOkta">remove_powered_by_okta</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.name"></a>

- *Type:* str

Name of the brand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#name Brand#name}

---

##### `agree_to_custom_privacy_policy`<sup>Optional</sup> <a name="agree_to_custom_privacy_policy" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.agreeToCustomPrivacyPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is a required input flag with when changing custom_privacy_url, shouldn't be considered as a readable property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#agree_to_custom_privacy_policy Brand#agree_to_custom_privacy_policy}

---

##### `brand_id`<sup>Optional</sup> <a name="brand_id" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.brandId"></a>

- *Type:* str

Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source.

Do this by setting brand_id. `DEPRECATED`: Okta has fully support brand creation, this attribute is a no op and will be removed

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#brand_id Brand#brand_id}

---

##### `custom_privacy_policy_url`<sup>Optional</sup> <a name="custom_privacy_policy_url" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.customPrivacyPolicyUrl"></a>

- *Type:* str

Custom privacy policy URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#custom_privacy_policy_url Brand#custom_privacy_policy_url}

---

##### `default_app_app_instance_id`<sup>Optional</sup> <a name="default_app_app_instance_id" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.defaultAppAppInstanceId"></a>

- *Type:* str

Default app app instance id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#default_app_app_instance_id Brand#default_app_app_instance_id}

---

##### `default_app_app_link_name`<sup>Optional</sup> <a name="default_app_app_link_name" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.defaultAppAppLinkName"></a>

- *Type:* str

Default app app link name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#default_app_app_link_name Brand#default_app_app_link_name}

---

##### `default_app_classic_application_uri`<sup>Optional</sup> <a name="default_app_classic_application_uri" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.defaultAppClassicApplicationUri"></a>

- *Type:* str

Default app classic application uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#default_app_classic_application_uri Brand#default_app_classic_application_uri}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.locale"></a>

- *Type:* str

The language specified as an IETF BCP 47 language tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#locale Brand#locale}

---

##### `remove_powered_by_okta`<sup>Optional</sup> <a name="remove_powered_by_okta" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.removePoweredByOkta"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#remove_powered_by_okta Brand#remove_powered_by_okta}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetAgreeToCustomPrivacyPolicy">reset_agree_to_custom_privacy_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetBrandId">reset_brand_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetCustomPrivacyPolicyUrl">reset_custom_privacy_policy_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetDefaultAppAppInstanceId">reset_default_app_app_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetDefaultAppAppLinkName">reset_default_app_app_link_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetDefaultAppClassicApplicationUri">reset_default_app_classic_application_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetLocale">reset_locale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetRemovePoweredByOkta">reset_remove_powered_by_okta</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.brand.Brand.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.brand.Brand.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.brand.Brand.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.brand.Brand.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.brand.Brand.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.brand.Brand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.brand.Brand.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.brand.Brand.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.brand.Brand.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.brand.Brand.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.brand.Brand.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.brand.Brand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.brand.Brand.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.brand.Brand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.brand.Brand.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.brand.Brand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.brand.Brand.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.brand.Brand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.brand.Brand.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.brand.Brand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.brand.Brand.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.brand.Brand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.brand.Brand.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.brand.Brand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.brand.Brand.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.brand.Brand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.brand.Brand.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.brand.Brand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.brand.Brand.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.brand.Brand.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.Brand.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.brand.Brand.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.brand.Brand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.brand.Brand.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.brand.Brand.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.brand.Brand.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.brand.Brand.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.brand.Brand.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_agree_to_custom_privacy_policy` <a name="reset_agree_to_custom_privacy_policy" id="@cdktf/provider-okta.brand.Brand.resetAgreeToCustomPrivacyPolicy"></a>

```python
def reset_agree_to_custom_privacy_policy() -> None
```

##### `reset_brand_id` <a name="reset_brand_id" id="@cdktf/provider-okta.brand.Brand.resetBrandId"></a>

```python
def reset_brand_id() -> None
```

##### `reset_custom_privacy_policy_url` <a name="reset_custom_privacy_policy_url" id="@cdktf/provider-okta.brand.Brand.resetCustomPrivacyPolicyUrl"></a>

```python
def reset_custom_privacy_policy_url() -> None
```

##### `reset_default_app_app_instance_id` <a name="reset_default_app_app_instance_id" id="@cdktf/provider-okta.brand.Brand.resetDefaultAppAppInstanceId"></a>

```python
def reset_default_app_app_instance_id() -> None
```

##### `reset_default_app_app_link_name` <a name="reset_default_app_app_link_name" id="@cdktf/provider-okta.brand.Brand.resetDefaultAppAppLinkName"></a>

```python
def reset_default_app_app_link_name() -> None
```

##### `reset_default_app_classic_application_uri` <a name="reset_default_app_classic_application_uri" id="@cdktf/provider-okta.brand.Brand.resetDefaultAppClassicApplicationUri"></a>

```python
def reset_default_app_classic_application_uri() -> None
```

##### `reset_locale` <a name="reset_locale" id="@cdktf/provider-okta.brand.Brand.resetLocale"></a>

```python
def reset_locale() -> None
```

##### `reset_remove_powered_by_okta` <a name="reset_remove_powered_by_okta" id="@cdktf/provider-okta.brand.Brand.resetRemovePoweredByOkta"></a>

```python
def reset_remove_powered_by_okta() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Brand resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.brand.Brand.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import brand

brand.Brand.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.brand.Brand.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import brand

brand.Brand.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.brand.Brand.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import brand

brand.Brand.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.brand.Brand.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import brand

brand.Brand.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Brand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.brand.Brand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.brand.Brand.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Brand to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.brand.Brand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Brand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.Brand.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Brand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.emailDomainId">email_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.links">links</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicyInput">agree_to_custom_privacy_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.brandIdInput">brand_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrlInput">custom_privacy_policy_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppAppInstanceIdInput">default_app_app_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppAppLinkNameInput">default_app_app_link_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppClassicApplicationUriInput">default_app_classic_application_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.removePoweredByOktaInput">remove_powered_by_okta_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicy">agree_to_custom_privacy_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.brandId">brand_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrl">custom_privacy_policy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppAppInstanceId">default_app_app_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppAppLinkName">default_app_app_link_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppClassicApplicationUri">default_app_classic_application_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.removePoweredByOkta">remove_powered_by_okta</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.brand.Brand.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.brand.Brand.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.brand.Brand.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.brand.Brand.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.brand.Brand.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.brand.Brand.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.brand.Brand.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.brand.Brand.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.brand.Brand.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.brand.Brand.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.brand.Brand.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.brand.Brand.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.Brand.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.brand.Brand.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_domain_id`<sup>Required</sup> <a name="email_domain_id" id="@cdktf/provider-okta.brand.Brand.property.emailDomainId"></a>

```python
email_domain_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-okta.brand.Brand.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.brand.Brand.property.links"></a>

```python
links: str
```

- *Type:* str

---

##### `agree_to_custom_privacy_policy_input`<sup>Optional</sup> <a name="agree_to_custom_privacy_policy_input" id="@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicyInput"></a>

```python
agree_to_custom_privacy_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `brand_id_input`<sup>Optional</sup> <a name="brand_id_input" id="@cdktf/provider-okta.brand.Brand.property.brandIdInput"></a>

```python
brand_id_input: str
```

- *Type:* str

---

##### `custom_privacy_policy_url_input`<sup>Optional</sup> <a name="custom_privacy_policy_url_input" id="@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrlInput"></a>

```python
custom_privacy_policy_url_input: str
```

- *Type:* str

---

##### `default_app_app_instance_id_input`<sup>Optional</sup> <a name="default_app_app_instance_id_input" id="@cdktf/provider-okta.brand.Brand.property.defaultAppAppInstanceIdInput"></a>

```python
default_app_app_instance_id_input: str
```

- *Type:* str

---

##### `default_app_app_link_name_input`<sup>Optional</sup> <a name="default_app_app_link_name_input" id="@cdktf/provider-okta.brand.Brand.property.defaultAppAppLinkNameInput"></a>

```python
default_app_app_link_name_input: str
```

- *Type:* str

---

##### `default_app_classic_application_uri_input`<sup>Optional</sup> <a name="default_app_classic_application_uri_input" id="@cdktf/provider-okta.brand.Brand.property.defaultAppClassicApplicationUriInput"></a>

```python
default_app_classic_application_uri_input: str
```

- *Type:* str

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="@cdktf/provider-okta.brand.Brand.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.brand.Brand.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remove_powered_by_okta_input`<sup>Optional</sup> <a name="remove_powered_by_okta_input" id="@cdktf/provider-okta.brand.Brand.property.removePoweredByOktaInput"></a>

```python
remove_powered_by_okta_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `agree_to_custom_privacy_policy`<sup>Required</sup> <a name="agree_to_custom_privacy_policy" id="@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicy"></a>

```python
agree_to_custom_privacy_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.brand.Brand.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

---

##### `custom_privacy_policy_url`<sup>Required</sup> <a name="custom_privacy_policy_url" id="@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrl"></a>

```python
custom_privacy_policy_url: str
```

- *Type:* str

---

##### `default_app_app_instance_id`<sup>Required</sup> <a name="default_app_app_instance_id" id="@cdktf/provider-okta.brand.Brand.property.defaultAppAppInstanceId"></a>

```python
default_app_app_instance_id: str
```

- *Type:* str

---

##### `default_app_app_link_name`<sup>Required</sup> <a name="default_app_app_link_name" id="@cdktf/provider-okta.brand.Brand.property.defaultAppAppLinkName"></a>

```python
default_app_app_link_name: str
```

- *Type:* str

---

##### `default_app_classic_application_uri`<sup>Required</sup> <a name="default_app_classic_application_uri" id="@cdktf/provider-okta.brand.Brand.property.defaultAppClassicApplicationUri"></a>

```python
default_app_classic_application_uri: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-okta.brand.Brand.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.brand.Brand.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remove_powered_by_okta`<sup>Required</sup> <a name="remove_powered_by_okta" id="@cdktf/provider-okta.brand.Brand.property.removePoweredByOkta"></a>

```python
remove_powered_by_okta: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.brand.Brand.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BrandConfig <a name="BrandConfig" id="@cdktf/provider-okta.brand.BrandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.brand.BrandConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import brand

brand.BrandConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  agree_to_custom_privacy_policy: typing.Union[bool, IResolvable] = None,
  brand_id: str = None,
  custom_privacy_policy_url: str = None,
  default_app_app_instance_id: str = None,
  default_app_app_link_name: str = None,
  default_app_classic_application_uri: str = None,
  locale: str = None,
  remove_powered_by_okta: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.name">name</a></code> | <code>str</code> | Name of the brand. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.agreeToCustomPrivacyPolicy">agree_to_custom_privacy_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is a required input flag with when changing custom_privacy_url, shouldn't be considered as a readable property. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.brandId">brand_id</a></code> | <code>str</code> | Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.customPrivacyPolicyUrl">custom_privacy_policy_url</a></code> | <code>str</code> | Custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.defaultAppAppInstanceId">default_app_app_instance_id</a></code> | <code>str</code> | Default app app instance id. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.defaultAppAppLinkName">default_app_app_link_name</a></code> | <code>str</code> | Default app app link name. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.defaultAppClassicApplicationUri">default_app_classic_application_uri</a></code> | <code>str</code> | Default app classic application uri. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.locale">locale</a></code> | <code>str</code> | The language specified as an IETF BCP 47 language tag. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.removePoweredByOkta">remove_powered_by_okta</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.brand.BrandConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.brand.BrandConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.brand.BrandConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.brand.BrandConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.brand.BrandConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.BrandConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.brand.BrandConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.brand.BrandConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the brand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#name Brand#name}

---

##### `agree_to_custom_privacy_policy`<sup>Optional</sup> <a name="agree_to_custom_privacy_policy" id="@cdktf/provider-okta.brand.BrandConfig.property.agreeToCustomPrivacyPolicy"></a>

```python
agree_to_custom_privacy_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is a required input flag with when changing custom_privacy_url, shouldn't be considered as a readable property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#agree_to_custom_privacy_policy Brand#agree_to_custom_privacy_policy}

---

##### `brand_id`<sup>Optional</sup> <a name="brand_id" id="@cdktf/provider-okta.brand.BrandConfig.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source.

Do this by setting brand_id. `DEPRECATED`: Okta has fully support brand creation, this attribute is a no op and will be removed

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#brand_id Brand#brand_id}

---

##### `custom_privacy_policy_url`<sup>Optional</sup> <a name="custom_privacy_policy_url" id="@cdktf/provider-okta.brand.BrandConfig.property.customPrivacyPolicyUrl"></a>

```python
custom_privacy_policy_url: str
```

- *Type:* str

Custom privacy policy URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#custom_privacy_policy_url Brand#custom_privacy_policy_url}

---

##### `default_app_app_instance_id`<sup>Optional</sup> <a name="default_app_app_instance_id" id="@cdktf/provider-okta.brand.BrandConfig.property.defaultAppAppInstanceId"></a>

```python
default_app_app_instance_id: str
```

- *Type:* str

Default app app instance id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#default_app_app_instance_id Brand#default_app_app_instance_id}

---

##### `default_app_app_link_name`<sup>Optional</sup> <a name="default_app_app_link_name" id="@cdktf/provider-okta.brand.BrandConfig.property.defaultAppAppLinkName"></a>

```python
default_app_app_link_name: str
```

- *Type:* str

Default app app link name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#default_app_app_link_name Brand#default_app_app_link_name}

---

##### `default_app_classic_application_uri`<sup>Optional</sup> <a name="default_app_classic_application_uri" id="@cdktf/provider-okta.brand.BrandConfig.property.defaultAppClassicApplicationUri"></a>

```python
default_app_classic_application_uri: str
```

- *Type:* str

Default app classic application uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#default_app_classic_application_uri Brand#default_app_classic_application_uri}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-okta.brand.BrandConfig.property.locale"></a>

```python
locale: str
```

- *Type:* str

The language specified as an IETF BCP 47 language tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#locale Brand#locale}

---

##### `remove_powered_by_okta`<sup>Optional</sup> <a name="remove_powered_by_okta" id="@cdktf/provider-okta.brand.BrandConfig.property.removePoweredByOkta"></a>

```python
remove_powered_by_okta: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/brand#remove_powered_by_okta Brand#remove_powered_by_okta}

---



